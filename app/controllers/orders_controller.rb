class OrdersController < ApplicationController

  def index 
    orders = Order.all.order(appointment_date: :desc)
    render json: OrderSerializer.new(orders).to_serialized_json
  end 

  def show 
    order = Order.find_by(id: params[:id])
    render json: OrderSerializer.new(order).to_serialized_json
  end 

  def create 
    order = Order.new(
      appointment_date: params[:appointment_date],
      appointment_type: params[:appointment_type],
      test_results: params[:test_results].strip,
      treatment_info: params[:treatment_info].strip,
      follow_up: params[:follow_up],
    )
    doctor = Doctor.find_or_create_by(name: params[:doctor_name].strip.downcase, specialty: params[:doctor_specialty].strip.downcase)
    
    order.doctor = doctor 
    
    if order.save 
      render json: OrderSerializer.new(order).to_serialized_json
    else 
      render json: { error_message: order.errors.full_messages }
    end 
  end 

end
