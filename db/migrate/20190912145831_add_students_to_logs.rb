class AddStudentsToLogs < ActiveRecord::Migration[5.2]
  def change
    add_reference :logs, :student, foreign_key: true
  end
end
