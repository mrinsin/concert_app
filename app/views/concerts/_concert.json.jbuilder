json.extract! concert, :id, :band, :location, :ticket_price, :created_at, :updated_at
json.url concert_url(concert, format: :json)