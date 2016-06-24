require_relative 'models'

teams = [
  ["AL","East","BAL","Orioles","Baltimore, MD","Baltimore Orioles"],
  ["AL","East","BOS","Red Sox","Boston, MA","Boston Red Sox"],
  ["AL","East","NYY","Yankees","New York City, NY","New York Yankees"],
  ["AL","East","TBR","Rays","Tampa Bay, FL","Tampa Bay Rays"],
  ["AL","East","TOR","Blue Jays","Toronto, ON","Toronto Blue Jays"],
  ["AL","Central","CHW","White Sox","Chicago, IL","Chicago White Sox"],
  ["AL","Central","CLE","Indians","Cleveland, OH","Cleveland Indians"],
  ["AL","Central","DET","Tigers","Detroit, MI","Detroit Tigers"],
  ["AL","Central","KCR","Royals","Kansas City, MO","Kansas City Royals"],
  ["AL","Central","MIN","Twins","Minneapolis, MN","Minnesota Twins"],
  ["AL","West","HOU","Astros","Houston, TX","Houston Astros"],
  ["AL","West","LAA","Angels","Anaheim, CA","Los Angeles Angels of Anaheim"],
  ["AL","West","OAK","Athletics","Oakland, CA","Oakland Athletics"],
  ["AL","West","SEA","Mariners","Seattle, WA","Seattle Mariners"],
  ["AL","West","TEX","Rangers","Arlington, TX","Texas Rangers"],
  ["NL","East","ATL","Braves","Atlanta, GA","Atlanta Braves"],
  ["NL","East","MIA","Marlins","Miami, FL","Miami Marlins"],
  ["NL","East","NYM","Mets","New York City, NY","New York Mets"],
  ["NL","East","PHI","Phillies","Philadelphia, PA","Philadelphia Phillies"],
  ["NL","East","WSN","Nationals","Washington, D.C.","Washington Nationals"],
  ["NL","Central","CHC","Cubs","Chicago, IL","Chicago Cubs"],
  ["NL","Central","CIN","Reds","Cincinnati, OH","Cincinnati Reds"],
  ["NL","Central","MIL","Brewers","Milwaukee, WI","Milwaukee Brewers"],
  ["NL","Central","PIT","Pirates","Pittsburgh, PA","Pittsburgh Pirates"],
  ["NL","Central","STL","Cardinals","St. Louis, MO","St. Louis Cardinals"],
  ["NL","West","ARI","Diamondbacks","Phoenix, AZ","Arizona Diamondbacks"],
  ["NL","West","COL","Rockies","Denver, CO","Colorado Rockies"],
  ["NL","West","LAD","Dodgers","Los Angeles, CA","Los Angeles Dodgers"],
  ["NL","West","SDP","Padres","San Diego, CA","San Diego Padres"],
  ["NL","West","SFG","Giants","San Francisco, CA","San Francisco Giants"],
]

MLB_CODES = {
  "NYM" => "nyn",
  "CHC" => "chn",
  "KCR" => "kca",
  "NYY" => "nya",
  "LAA" => "ana",
  "STL" => "sln",
  "CHW" => "cha",
  "WSN" => "was",
  "TBR" => "tba",
  "SDP" => "sdn",
  "LAD" => "lan",
  "SFG" => "sfn",
}

teams.each do |team|
  league = League.find_or_create_by(name: team[0])
  division = Division.find_or_create_by(name: team[1], league: league)

  t = Team.create(
    division: division,
    abbr: team[2],
    name: team[3],
    city: team[4],
    full_name: team[5],
    mlb_code: MLB_CODES[team[2]] || team[2].downcase,
  )

  puts "#{t.id}: #{t.name}"
end
