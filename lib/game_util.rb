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
    home_score = game['linescore']['r']['home'].to_i
    home_win = game['home_win'].to_i
    home_loss = game['home_loss'].to_i

    away_team = Team.find_by(mlb_code: game['away_code'])
    away_score = game['linescore']['r']['away'].to_i
    away_win = game['away_win'].to_i
    away_loss = game['away_loss'].to_i

    {
      date: date,
      away_team: away_team,
      home_team: home_team,
      away_score: away_score,
      home_score: home_score,
      home_win: home_win,
      home_loss: home_loss,
      away_win: away_win,
      away_loss: away_loss,
    }
  end
end

