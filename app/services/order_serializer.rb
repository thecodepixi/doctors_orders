class OrderSerializer 
  def initialize(order_object)
    @order = order_object 
  end 

  def to_serialized_json 
    @order.as_json(except: [:created_at, :updated_at, :doctor_id], include: { doctor: { only: [:name, :specialty]}})
  end 
end 