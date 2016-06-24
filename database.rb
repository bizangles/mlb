require 'active_record'

ActiveRecord::Base.logger = Logger.new(File.open('log/database.log', 'w'))

ActiveRecord::Base.establish_connection(
  :adapter => 'sqlite3',
  :database => 'mlb.db',
)

ActiveRecord::Schema.define do
  unless ActiveRecord::Base.connection.tables.include? 'leagues'
    create_table :leagues do |table|
      table.column :name, :string
    end
  end

  unless ActiveRecord::Base.connection.tables.include? 'divisions'
    create_table :divisions do |table|
      table.column :name, :string
      table.column :league_id, :integer
    end
  end

  unless ActiveRecord::Base.connection.tables.include? 'teams'
    create_table :teams do |table|
      table.column :name, :string
      table.column :city, :string
      table.column :full_name, :string
      table.column :abbr, :string
      table.column :mlb_code, :string
      table.column :division_id, :integer
    end
  end

  unless ActiveRecord::Base.connection.tables.include? 'games'
    create_table :games do |table|
      table.column :date, :date
      table.column :home_team_id, :integer
      table.column :away_team_id, :integer
      table.column :home_score, :integer
      table.column :away_score, :integer
      table.column :home_win, :integer
      table.column :home_loss, :integer
      table.column :away_win, :integer
      table.column :away_loss, :integer
    end
  end
end

