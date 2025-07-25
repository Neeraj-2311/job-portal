import React from 'react';
import type { ProfileErrors, UserProfile } from '../../types/types';
import { ProfilePhoto } from './ProfilePhoto';
import { FormField } from './FormField';
import { TextAreaField } from './TextAreaField';

interface ProfileEditFormProps {
  form: UserProfile;
  errors: ProfileErrors;
  onSave: () => void;
  onCancel: () => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onSkillsChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const ProfileEditForm: React.FC<ProfileEditFormProps> = ({
  form,
  errors,
  onSave,
  onCancel,
  onChange,
  onSkillsChange
}) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Profile Photo and Basic Info */}
      <div className="flex flex-col sm:flex-row gap-6">
        <ProfilePhoto
          src={form.photo}
          alt={`${form.name}'s profile`}
          size="small"
          showEditButton
        />

        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField
            id="name"
            name="name"
            label="Full Name"
            value={form.name}
            error={errors.name}
            required
            onChange={onChange}
          />

          <FormField
            id="email"
            name="email"
            label="Email Address"
            type="email"
            value={form.email}
            error={errors.email}
            required
            onChange={onChange}
          />

          <FormField
            id="title"
            name="title"
            label="Job Title"
            value={form.title || ''}
            error={errors.title}
            required
            onChange={onChange}
          />

          <FormField
            id="company"
            name="company"
            label="Company"
            value={form.company || ''}
            error={errors.company}
            required
            onChange={onChange}
          />

          <FormField
            id="experience"
            name="experience"
            label="Experience"
            value={form.experience || ''}
            placeholder="e.g., 5 years 1 month"
            onChange={onChange}
          />

          <FormField
            id="location"
            name="location"
            label="Location"
            value={form.location || ''}
            error={errors.location}
            required
            onChange={onChange}
          />

          <FormField
            id="phone"
            name="phone"
            label="Phone Number"
            type="tel"
            value={form.phone || ''}
            error={errors.phone}
            onChange={onChange}
          />

          <FormField
            id="linkedinUrl"
            name="linkedinUrl"
            label="LinkedIn URL"
            type="url"
            value={form.linkedinUrl || ''}
            placeholder="https://linkedin.com/in/username"
            onChange={onChange}
          />
        </div>
      </div>

      {/* Bio */}
      <TextAreaField
        id="bio"
        name="bio"
        label="Bio"
        value={form.bio}
        error={errors.bio}
        required
        onChange={onChange}
      />

      {/* Skills */}
      <div>
        <label htmlFor="skills" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          Skills (comma separated)
        </label>
        <input
          type="text"
          id="skills"
          name="skills"
          value={form.skills.join(', ')}
          onChange={onSkillsChange}
          placeholder="React, TypeScript, Node.js"
          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:border-green-500 focus:ring-green-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 transition-colors"
        />
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-3 pt-4">
        <button
          type="submit"
          className="inline-flex justify-center items-center px-6 py-2 bg-green-600 hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600 text-white text-sm font-medium rounded-md transition-colors focus:outline-none"
        >
          Save Changes
        </button>
        <button
          type="button"
          onClick={onCancel}
          className="inline-flex justify-center items-center px-6 py-2 bg-gray-200 hover:bg-gray-300 dark:bg-gray-600 dark:hover:bg-gray-500 text-gray-700 dark:text-gray-200 text-sm font-medium rounded-md transition-colors focus:outline-none"
        >
          Cancel
        </button>
      </div>
    </form>
  );
};