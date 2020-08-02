import React from 'react';
import Button from './Button';

export default {
    title: 'Button', // mandatory and should be unique inside the entire storybook
    component: Button
};

// Every named export represents a story
export const Primary = () => <Button variant='primary'>Primary</Button>;
export const Secondary = () => <Button variant='secondary'>Secondary</Button>;
export const Success = () => <Button variant='success'>Success</Button>;
export const Danger = () => <Button variant='danger'>Danger</Button>;
