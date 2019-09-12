class CreateLogs < ActiveRecord::Migration[5.2]
  def change
    create_table :logs do |t|
      t.string :username
      t.string :feeling_scale
      t.string :feelings
      t.string :comment

      t.timestamps
    end
  end
end
