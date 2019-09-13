class RemoveFeelingSclaeFromLogs < ActiveRecord::Migration[5.2]
  def change
    remove_column :logs, :feeling_scale, :string
  end
end
