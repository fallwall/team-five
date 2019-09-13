class RemoveUserIdFromLogs < ActiveRecord::Migration[5.2]
  def change
    remove_column :logs, :user_id, :integer
  end
end
