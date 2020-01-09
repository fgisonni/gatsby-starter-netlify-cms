import CMS from 'netlify-cms-app'
import uploadcare from 'netlify-cms-media-library-uploadcare'
import cloudinary from 'netlify-cms-media-library-cloudinary'

import MedicalDisclaimerPagePreview from './preview-templates/MedicalDisclaimerPagePreview'
import BlogPostPreview from './preview-templates/BlogPostPreview'
import ProductPagePreview from './preview-templates/ProductPagePreview'
import IndexPagePreview from './preview-templates/IndexPagePreview'

import WeeklyMealPlanPreview from './preview-templates/WeeklyMealPlanPreview'
import RecipesPostPreview from './preview-templates/RecipesPostPreview'
import QuickStartGuidesPreview from './preview-templates/QuickStartGuidesPreview'
import MeditationsPreview from './preview-templates/MeditationsPreview'
import FitnessPreview from './preview-templates/FitnessPreview'

import ExercisePreview from './preview-templates/ExercisePreview'

CMS.registerMediaLibrary(uploadcare);
CMS.registerMediaLibrary(cloudinary);

CMS.registerPreviewTemplate('index', IndexPagePreview)
CMS.registerPreviewTemplate('medical', MedicalDisclaimerPagePreview)
CMS.registerPreviewTemplate('products', ProductPagePreview)
CMS.registerPreviewTemplate('blog', BlogPostPreview)

CMS.registerPreviewTemplate('weekly-meal-plans', WeeklyMealPlanPreview)
CMS.registerPreviewTemplate('recipes', RecipesPostPreview)
CMS.registerPreviewTemplate('quick', QuickStartGuidesPreview)
CMS.registerPreviewTemplate('meditations', MeditationsPreview)
CMS.registerPreviewTemplate('fitness', FitnessPreview)

CMS.registerPreviewTemplate('exercise-child', ExercisePreview)
