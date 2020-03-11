# README
## Doctor's Orders API 

**Models:** 

- **`Order`**

    X `belongs_to :doctor`

    X has an 'appointment_date' date

    X has an 'appointment_type' string

    X has 'test_results' string, default "none provided"

    X has 'treatment_info' string, default "none provided"

    X has 'follow_up' boolean, default "false"

    X has a 'doctor_id' foreign key

    X only required info are appointment date, doctor info, and appointment type.


- **`Doctor`**

    X `has_many :orders`

    X has a 'name' string

    X has a 'specialty' string

    X requires both name and specialty


**Controllers:** 

- **`OrdersController`**

    X `index` route, returns all orders

    X `show`, returns a single order based on its id

    X `create`, adds a new order to the DB

      X `create` will `find_or_create_by` for doctor info

    - `destroy` ?

**Serializer** 

- **`OrdersSerializer`**

    X include all order info except created_at, updated_at, and doctor_id

    X include ONLY name and specialty for doctor info