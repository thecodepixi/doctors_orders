class Order < ApplicationRecord
  belongs_to :doctor
  
  validates :appointment_date, presence: true 
  validates :appointment_type, presence: true 
end
