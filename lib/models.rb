require_relative 'database'

class League < ActiveRecord::Base
  has_many :divisions
end

class Division < ActiveRecord::Base
  belongs_to :league
  has_many :teams
end

class Team < ActiveRecord::Base
  belongs_to :division
  has_many :home_games, :foreign_key => 'home_team_id', :class_name => 'Game'
  has_many :away_games, :foreign_key => 'away_team_id', :class_name => 'Game'

  def games
    Game.where("home_team_id = ? or away_team_id = ?", id, id).order(:id)
  end
end

class Game < ActiveRecord::Base
  belongs_to :home_team, :class_name => 'Team'
  belongs_to :away_team, :class_name => 'Team'

  belongs_to :winner_team, :class_name => 'Team'
end
