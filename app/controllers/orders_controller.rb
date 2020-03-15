require 'pry'

class OrdersController < ApplicationController

  def index 
    orders = Order.all.order(appointment_date: :desc)
    follow_up_orders = Order.follow_up_orders.order(appointment_date: :desc)
    render json: { orders: OrderSerializer.new(orders).to_serialized_json, follow_up_orders: OrderSerializer.new(follow_up_orders).to_serialized_json }
  end 

  def show 
    order = Order.find_by(id: params[:id])
    render json: OrderSerializer.new(order).to_serialized_json
  end 

  def create 
    # new order object from order details 
    order = Order.new(
      appointment_date: params[:appointment_date],
      appointment_type: params[:appointment_type],
      test_results: params[:test_results],
      treatment_info: params[:treatment_info],
      follow_up: params[:follow_up]
    )
    # check if doctor info has been provided and add doctor if included
    if params[:doctor_name] && params[:doctor_specialty]
      doctor = Doctor.find_or_create_by(name: params[:doctor_name].strip.downcase, specialty: params[:doctor_specialty].strip.downcase)
    
      order.doctor = doctor 
    end 
    # if order saves, send the newly created order info back to front end
    if order.save 
      render json: OrderSerializer.new(order).to_serialized_json
    else 
      # if order does not save, send back an error message
      render json: { status: "error", errors: order.errors.full_messages }, status: 422
    end 
  end 

  def update 
    order = Order.find_by(id: params[:id])
    order.follow_up = params[:follow_up]
    
    if order.save 
      render json: OrderSerializer.new(order).to_serialized_json
    else 
      # if order does not save, send back an error message
      render json: { status: "error", errors: order.errors.full_messages }, status: 422
    end
  end 

  def destroy 
    order = Order.find(params[:id])
    order.destroy

    render json: OrderSerializer.new(order).to_serialized_json
  end 

end
