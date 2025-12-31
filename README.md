# doyouwipe

doyouwipe website

## Setup

### 1. Environment Variables

Create a `.env` file in the root directory and add your Supabase credentials:

```env
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### 2. Database Schema

Your Supabase project should have the following tables:

#### Table 1: `qotd`
- `id`: `int8` (key)
- `for`: `date` (Target date for the question)
- `q`: `jsonb` (Contains question text and button options)
    - Example: `{"q": "Do you wipe?", "a": [{"color": 1, "text": "yes"}, {"color": -1, "text": "no"}]}`

#### Table 2: `votd` 
- `id`: `int8` (key)
- `for`: `date` (Target date)
- `a`: `jsonb` (Vote tallies)
    - Example: `{"a": [{"v": 0, "vn": "yes"}, {"v": 0, "vn": "no"}]}`

## what is it about?

nothing yet...

## why should i answer ur questions?

Just for fun.
