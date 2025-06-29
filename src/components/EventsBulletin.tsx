import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Calendar, Loader2 } from 'lucide-react';
import { useEvents, Event } from '@/contexts/EventContext';

const EventsBulletin = () => {
  // Get events from context
  const { events } = useEvents();

  const [scrollPosition, setScrollPosition] = useState(0);
  const [visibleEvents, setVisibleEvents] = useState<Event[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Events are already sorted in the context

  // Update visible events based on scroll position
  useEffect(() => {
    // In a real implementation, this would be more sophisticated
    // to handle different screen sizes and responsive design
    if (events.length > 0) {
      const startIdx = Math.min(scrollPosition, Math.max(0, events.length - 3));
      setVisibleEvents(events.slice(startIdx, startIdx + 3));
      setIsLoading(false);
    } else if (events.length === 0 && !isLoading) {
      setIsLoading(false);
    }
  }, [scrollPosition, events, isLoading]);

  const scrollLeft = () => {
    setScrollPosition(Math.max(0, scrollPosition - 1));
  };

  const scrollRight = () => {
    setScrollPosition(Math.min(events.length - 3, scrollPosition + 1));
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  return (
    <div className="w-full py-8 bg-gradient-to-r from-blue-50 to-indigo-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-800 flex items-center">
            <Calendar className="mr-2 h-6 w-6 text-blue-500" />
            Upcoming Events
          </h2>
          <div className="flex space-x-2">
            <button 
              onClick={scrollLeft} 
              disabled={scrollPosition === 0}
              className={`p-2 rounded-full ${scrollPosition === 0 ? 'text-gray-400 bg-gray-100' : 'text-gray-700 bg-white hover:bg-gray-100'} shadow`}
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button 
              onClick={scrollRight} 
              disabled={scrollPosition >= events.length - 3}
              className={`p-2 rounded-full ${scrollPosition >= events.length - 3 ? 'text-gray-400 bg-gray-100' : 'text-gray-700 bg-white hover:bg-gray-100'} shadow`}
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {isLoading ? (
            <div className="col-span-3 flex justify-center items-center py-12">
              <Loader2 className="h-8 w-8 animate-spin text-blue-500" />
              <span className="ml-2 text-gray-600">Loading events...</span>
            </div>
          ) : visibleEvents.length === 0 ? (
            <div className="col-span-3 text-center py-12">
              <p className="text-gray-500">No upcoming events found.</p>
              <p className="text-sm text-gray-400 mt-2">Check back later for new events!</p>
            </div>
          ) : (
            visibleEvents.map((event) => (
            <div key={event.id} className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1">
              <div className={`h-2 ${event.type === 'job-fair' ? 'bg-blue-500' : 'bg-purple-500'}`}></div>
              <div className="p-5">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-semibold text-lg text-gray-800 line-clamp-1">{event.title}</h3>
                  <span className={`text-xs font-medium px-2 py-1 rounded-full ${event.type === 'job-fair' ? 'bg-blue-100 text-blue-800' : 'bg-purple-100 text-purple-800'}`}>
                    {event.type === 'job-fair' ? 'Job Fair' : 'Webinar'}
                  </span>
                </div>
                <p className="text-sm text-gray-600 mb-3 line-clamp-2">{event.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-gray-700">{formatDate(event.date)}</span>
                  <a
                    href={event.meetingLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-blue-600 hover:text-blue-800 hover:underline"
                  >
                    Join Event
                  </a>
                </div>
              </div>
            </div>
          )))}
        </div>
      </div>
    </div>
  );
};

export default EventsBulletin;