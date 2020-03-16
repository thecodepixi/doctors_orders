class Order < ApplicationRecord
  belongs_to :doctor
  
  validates :appointment_date, presence: true 
  validates :appointment_type, presence: true 

  def self.follow_up_orders 
    Order.where("follow_up = ?", true)
  end 

end
