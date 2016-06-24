require_relative 'models'

require 'net/http'
require 'json'

SCOREBOARD_URL = "http://m.mlb.com/gdcross/components/game/mlb/year_%Y/month_%m/day_%d/master_scoreboard.json"
FIRST_DAY = Date.new(2016,4,3)

def fetch_game_data(date)
  url = date.strftime(SCOREBOARD_URL)
  uri = URI(url)
  JSON.parse(Net::HTTP.get(uri))
end

def get_games(date)
  data = fetch_game_data(date)

  data['data']['games']['game'].map do |game|
    next if game['status']['status'] != 'Final'

    home_team = Team.find_by(mlb_code: game['home_code'])
    away_team = Team.find_by(mlb_code: game['away_code'])

    if home_team.nil?
      puts "#{game['home_code']} not found team: #{game['home_team_name']}"
    end

    if away_team.nil?
      puts "#{game['away_code']} not found team: #{game['away_team_name']}"
    end

    next if home_team.nil? || away_team.nil?

    home_score = game['linescore']['r']['home'].to_i
    away_score = game['linescore']['r']['away'].to_i

    winner_team = home_score > away_score ? home_team : away_team

    {
      date: date,
      away_team: away_team,
      home_team: home_team,
      away_score: away_score,
      home_score: home_score,
      winner_team: winner_team
    }
  end
end

