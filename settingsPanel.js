const SettingsPanel = ({ settings }) => {
    const [selectedImage, setSelectedImage] = React.useState(settings.get('profileImage') || null);

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setSelectedImage(reader.result);
                settings.set('profileImage', reader.result);
                updateProfilePicture(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const updateProfilePicture = (imageUrl) => {
        const profileBadges = document.querySelectorAll('.profile-badge');
        profileBadges.forEach(badge => {
            badge.style.backgroundImage = `url(${imageUrl})`;
        });
    };

    return (
        <View>
            <Button onPress={() => document.getElementById('fileInput').click()}>
                Upload Profile Picture
            </Button>
            <input
                type="file"
                id="fileInput"
                style={{ display: 'none' }}
                onChange={handleImageUpload}
            />
            {selectedImage && (
                <Image
                    source={{ uri: selectedImage }}
                    style={{ width: 100, height: 100 }}
                />
            )}
        </View>
    );
};
