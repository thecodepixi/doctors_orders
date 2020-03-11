class Doctor < ApplicationRecord
  has_many :orders 
  
  validates :name, presence: true 
  validates :specialty, presence: true 
end
