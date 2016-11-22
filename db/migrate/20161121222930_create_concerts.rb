class CreateConcerts < ActiveRecord::Migration
  def change
    create_table :concerts do |t|
      t.string :band
      t.string :location
      t.integer :ticket_price

      t.timestamps null: false
    end
  end
end
