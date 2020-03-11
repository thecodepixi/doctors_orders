class FixDoctorForeignKeyOnOrders < ActiveRecord::Migration[6.0]
  def change
    change_table :orders do |t| 
      t.rename :doctors_id, :doctor_id 
    end 
  end
end
