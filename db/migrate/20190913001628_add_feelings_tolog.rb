class AddFeelingsTolog < ActiveRecord::Migration[5.2]
  def change
    add_column :logs, :feelings, :string, array: true, default: []
  end
end
