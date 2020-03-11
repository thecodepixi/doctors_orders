class OrdersController < ApplicationController

  def index 
    orders = Order.all
    render json: OrderSerializer.new(orders).to_serialized_json
  end 

  def show 
    order = Order.find_by(id: params[:id])
    render json: OrderSerializer.new(order).to_serialized_json
  end 

end
