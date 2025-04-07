-- Create security_settings table
CREATE TABLE IF NOT EXISTS security_settings (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    login_notifications_enabled BOOLEAN DEFAULT false,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()),
    UNIQUE(user_id)
);

-- Create RLS policies
ALTER TABLE security_settings ENABLE ROW LEVEL SECURITY;

-- Policy to allow users to read their own security settings
CREATE POLICY "Users can read their own security settings"
    ON security_settings
    FOR SELECT
    USING (auth.uid() = user_id);

-- Policy to allow users to insert their own security settings
CREATE POLICY "Users can insert their own security settings"
    ON security_settings
    FOR INSERT
    WITH CHECK (auth.uid() = user_id);

-- Policy to allow users to update their own security settings
CREATE POLICY "Users can update their own security settings"
    ON security_settings
    FOR UPDATE
    USING (auth.uid() = user_id);

-- Create function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = timezone('utc'::text, now());
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Create trigger to automatically update updated_at
CREATE TRIGGER update_security_settings_updated_at
    BEFORE UPDATE ON security_settings
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column(); 