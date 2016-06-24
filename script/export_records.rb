require_relative 'models'

datasets = Team.all.map do |team|
  games_above = [0]
  team.games.each do |game|
    if game.home_team == team
      is_win = game.home_score > game.away_score
    else
      is_win = game.away_score > game.home_score
    end
    games_above.push(is_win ? games_above[-1] + 1 : games_above[-1] - 1)
  end

  {
    label: team.abbr,
    data: games_above.each_with_index.map { |g, n| { x: n, y: g } },
    fill: false,
    pointRadius: 0,
  }
end

puts "var data = #{{ datasets: datasets }.to_json }"
