import { useState } from 'react';
import type { ProfileErrors, UserProfile } from '../types/types';

export const useProfileForm = (initialProfile: UserProfile) => {
  const [profile, setProfile] = useState(initialProfile);
  const [editing, setEditing] = useState(false);
  const [form, setForm] = useState(profile);
  const [errors, setErrors] = useState<ProfileErrors>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev: UserProfile) => ({ ...prev, [name]: value }));

    if (errors[name]) {
      setErrors((prev: ProfileErrors) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSkillsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const skills = e.target.value.split(',').map(skill => skill.trim()).filter(skill => skill);
    setForm((prev: UserProfile) => ({ ...prev, skills }));
  };

  const validateForm = (): boolean => {
    const newErrors: ProfileErrors = {};

    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!form.bio.trim()) newErrors.bio = "Bio is required";
    if (!form.title?.trim()) newErrors.title = "Job title is required";
    if (!form.company?.trim()) newErrors.company = "Company is required";
    if (!form.location?.trim()) newErrors.location = "Location is required";
    if (form.phone && !/^[\+]?[1-9][\d]{0,15}$/.test(form.phone.replace(/\s/g, ''))) {
      newErrors.phone = "Please enter a valid phone number";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSave = () => {
    if (validateForm()) {
      setProfile({ ...form });
      setEditing(false);
    }
  };

  const handleCancel = () => {
    setForm(profile);
    setErrors({});
    setEditing(false);
  };

  const startEditing = () => setEditing(true);

  return {
    profile,
    form,
    errors,
    editing,
    handleChange,
    handleSkillsChange,
    handleSave,
    handleCancel,
    startEditing
  };
};