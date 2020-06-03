# API

## Entities

### Points (collect point)
  - id
  - name
  - email
  - whatsapp
  - latitude
  - logitude
  - city
  - uf
  - image_uri
  
### Point Items (pivot table between point and Item)
  - id
  - point_id
  - item_id

### Items (items of an collect point)
  - id
  - title
  - image_uri