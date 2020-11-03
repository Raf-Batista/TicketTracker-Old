class CreateTasks < ActiveRecord::Migration[6.0]
  def change
    create_table :tasks do |t|
      t.integer :project_id
      t.string :name 
      t.text :description
      t.boolean :completed, default: false
      t.datetime :completed_on 

      t.timestamps
    end
  end
end
