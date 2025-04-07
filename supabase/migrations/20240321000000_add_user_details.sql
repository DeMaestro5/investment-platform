-- Add new columns for user details
ALTER TABLE user_profiles
ADD COLUMN IF NOT EXISTS phone_number TEXT,
ADD COLUMN IF NOT EXISTS address TEXT,
ADD COLUMN IF NOT EXISTS city TEXT,
ADD COLUMN IF NOT EXISTS country TEXT,
ADD COLUMN IF NOT EXISTS postal_code TEXT;

-- Update RLS policies to allow users to update their own details
CREATE POLICY "Users can update their own details"
ON user_profiles
FOR UPDATE
USING (auth.uid() = id)
WITH CHECK (auth.uid() = id);

-- Add comment to explain the purpose of these columns
COMMENT ON COLUMN user_profiles.phone_number IS 'User''s phone number for contact purposes';
COMMENT ON COLUMN user_profiles.address IS 'User''s street address';
COMMENT ON COLUMN user_profiles.city IS 'User''s city of residence';
COMMENT ON COLUMN user_profiles.country IS 'User''s country of residence';
COMMENT ON COLUMN user_profiles.postal_code IS 'User''s postal/zip code'; 