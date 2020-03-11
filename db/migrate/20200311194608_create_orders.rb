class CreateOrders < ActiveRecord::Migration[6.0]
  def change
    create_table :orders do |t|
      t.datetime :appointment_date
      t.string :appointment_type
      t.text :test_results
      t.text :treatment_info
      t.boolean :follow_up
      t.integer :doctors_id
      
      t.timestamps
    end
  end
end
