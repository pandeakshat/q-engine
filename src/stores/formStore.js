// src/stores/formStore.js
import { persistentMap } from '@nanostores/persistent';

export const formAnswers = persistentMap('q-engine-answers', {});