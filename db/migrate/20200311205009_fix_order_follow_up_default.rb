class FixOrderFollowUpDefault < ActiveRecord::Migration[6.0]
  def change
    change_column_default :orders, :follow_up, from: nil, to: false 
  end
end
