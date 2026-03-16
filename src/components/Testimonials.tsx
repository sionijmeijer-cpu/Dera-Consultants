import { useState, useEffect, useCallback } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const testimonials = [
    {
      id: 1,
      initials: 'GS',
      name: 'Galli Sel',
      title: 'Business Owner',
      country: 'UAE',
      text: "Collaboration with Dera Consultants has been beneficial to my company's growth. I highly recommend their services to any serious investor. Sylvia is really the best to work with.",
      rating: 5
    },
    {
      id: 2,
      initials: 'HA',
      name: 'Harry Akande Jr',
      title: 'Business man',
      country: 'Nigeria',
      text: 'I was looking for a reliable partner for our global mobility needs. Dera Consultants exceeded our expectations with their deep knowledge and discretion. The support with St Lucia passport was exceptional.',
      rating: 5
    },
    {
      id: 3,
      initials: 'IG',
      name: 'Isabella Garcia',
      title: 'Lawyer',
      country: 'Spain',
      text: "As a legal professional, I appreciate thoroughness. Dera's team demonstrated an exceptional level of diligence and expertise throughout the entire process.",
      rating: 5
    },
    {
      id: 4,
      initials: 'MJ',
      name: 'Marcus Johnson',
      title: 'Entrepreneur',
      country: 'UK',
      text: 'Outstanding service from start to finish. The team at Dera Consultants made the entire citizenship process seamless and stress-free. Highly professional and responsive.',
      rating: 5
    },
    {
      id: 5,
      initials: 'SR',
      name: 'Sarah Rodriguez',
      title: 'Investment Manager',
      country: 'Mexico',
      text: 'Working with Dera Consultants was a game-changer for our investment portfolio. Their expertise in residency and citizenship prog
