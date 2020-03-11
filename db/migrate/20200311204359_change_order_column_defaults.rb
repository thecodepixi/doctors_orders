class ChangeOrderColumnDefaults < ActiveRecord::Migration[6.0]
  def change
    change_column_default :orders, :test_results, from: nil, to: 'None Provided'
    change_column_default :orders, :treatment_info, from: nil, to: 'None Provided'
  end
end
