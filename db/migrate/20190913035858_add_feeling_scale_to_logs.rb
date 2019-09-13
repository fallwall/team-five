class AddFeelingScaleToLogs < ActiveRecord::Migration[5.2]
  def change
    add_column :logs, :feeling_scale, :integer
  end
end
