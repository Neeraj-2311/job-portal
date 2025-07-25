import { useState } from "react";
import { ProfileData } from "../sample/sample"
import DynamicPageHeader from "../components/DynamicHeader";
import { ProfileEditForm } from "../components/Profile/ProfileEditForm";
import { useProfileForm } from "../hooks/useProfileForm";
import { ProfileDisplay } from '../components/Profile/ProfileDisplay';

const initialProfile = ProfileData;

const Profile = () => {
  const [activeTab, setActiveTab] = useState('Details');
  const {
    profile,
    form,
    errors,
    editing,
    handleChange,
    handleSkillsChange,
    handleSave,
    handleCancel,
    startEditing
  } = useProfileForm(initialProfile);

  return (
    <div className="max-w-[-webkit-fill-available] min-h-screen">
      <DynamicPageHeader
        title="Profile"
        helpText="This is your public profile"
        activeTab={activeTab}
        onTabChange={setActiveTab}
        tabs={[
          { label: 'Details', value: 'Details' },
          { label: 'Preferences', value: 'Preferences' },
          { label: 'Settings', value: 'Settings' },
        ]}
      />

      <main className="p-4 sm:p-6 lg:p-8 bg-gray-100 dark:bg-gray-700/40 lg:rounded-tl-2xl">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
          <div className="p-6">
            {editing ? (
              <ProfileEditForm
                form={form}
                errors={errors}
                onSave={handleSave}
                onCancel={handleCancel}
                onChange={handleChange}
                onSkillsChange={handleSkillsChange}
              />
            ) : (
              <ProfileDisplay profile={profile} onEditClick={startEditing} />
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Profile;