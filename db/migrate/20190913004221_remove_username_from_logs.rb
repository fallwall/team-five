class RemoveUsernameFromLogs < ActiveRecord::Migration[5.2]
  def change
    remove_column :logs, :username, :string
  end
end
