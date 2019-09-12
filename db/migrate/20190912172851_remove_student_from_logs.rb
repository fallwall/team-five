class RemoveStudentFromLogs < ActiveRecord::Migration[5.2]
  def change
    remove_reference :logs, :student, foreign_key: true
  end
end
