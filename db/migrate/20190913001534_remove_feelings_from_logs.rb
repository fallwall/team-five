class RemoveFeelingsFromLogs < ActiveRecord::Migration[5.2]
  def change
    remove_column :logs, :feelings, :string
  end
end
