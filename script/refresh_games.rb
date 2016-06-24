require_relative 'game_util'

day = FIRST_DAY

while day <= Date.today
  get_games(day).each do |game|
    Game.find_or_create_by(game)
  end

  puts "Done: #{day}"

  day += 1
end
