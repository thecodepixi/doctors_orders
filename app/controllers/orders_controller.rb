class OrdersController < ApplicationController

  def index 
    orders = Order.all 
    render json: orders
  end 

  def show 
    order = Order.find_by(id: params[:id])
    render json: order
  end 

end
