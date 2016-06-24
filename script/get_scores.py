from datetime import date
import urllib2
import json

url = "http://gd2.mlb.com/components/game/mlb/year_{day:%Y}/month_{day:%m}/day_{day:%d}/master_scoreboard.json"
standings_url = "http://mlb.mlb.com/lookup/json/named.historical_standings_schedule_date.bam?season={day:%Y}&game_date='{day:%Y/%d/%m}'&sit_code='h0'&league_id=103&league_id=104&all_star_sw='N'&version=48"

def get_results(game):
    return

def get_data(day):
  day_url = url.format(day=day)
  resp = urllib2.urlopen(day_url)
  data = json.loads(resp.read())

  for game in data['data']['games']['game']:
      if game['status']['status'] == 'Final':
          get_winner_loser(game)
  return data

def get_standings(day):
  day_url = standings_url.format(day=day)
  resp = urllib2.urlopen(day_url)

  return resp

  data = json.loads(resp.read())

  return data
