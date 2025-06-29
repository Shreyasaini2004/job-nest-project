import { useState } from 'react';
import { Calendar } from '@/components/ui/calendar';
import { useEvents, Event } from '@/contexts/EventContext';

const CalendarEvents = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const { events, addEvent } = useEvents();
  const [showEventForm, setShowEventForm] = useState(false);
  const [newEvent, setNewEvent] = useState<Partial<Event>>({
    title: '',
    type: 'job-fair',
    description: '',
    meetingLink: ''
  });

  const handleCreateEvent = () => {
    if (!date || !newEvent.title) return;

    addEvent({
      date: date,
      title: newEvent.title,
      type: newEvent.type as 'job-fair' | 'webinar',
      meetingLink: newEvent.meetingLink,
      description: newEvent.description
    });

    setShowEventForm(false);
    setNewEvent({
      title: '',
      type: 'job-fair',
      description: '',
      meetingLink: ''
    });
  };

  return (
    <div className="p-4 space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Calendar & Events</h2>
        <button
          onClick={() => setShowEventForm(true)}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Create Event
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white p-4 rounded-lg shadow">
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="rounded-md border"
          />
        </div>

        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-xl font-semibold mb-4">Upcoming Events</h3>
          <div className="space-y-4">
            {events.map((event) => (
              <div key={event.id} className="border p-4 rounded">
                <h4 className="font-semibold">{event.title}</h4>
                <p className="text-sm text-gray-600">
                  {event.date.toLocaleDateString()}
                </p>
                <p className="text-sm text-gray-600">{event.type}</p>
                {event.description && (
                  <p className="text-sm mt-2">{event.description}</p>
                )}
                {event.meetingLink && (
                  <a
                    href={event.meetingLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline text-sm block mt-2"
                  >
                    Join Meeting
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {showEventForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg w-full max-w-md">
            <h3 className="text-xl font-semibold mb-4">Create New Event</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Title
                </label>
                <input
                  type="text"
                  value={newEvent.title}
                  onChange={(e) =>
                    setNewEvent({ ...newEvent, title: e.target.value })
                  }
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Type
                </label>
                <select
                  value={newEvent.type}
                  onChange={(e) =>
                    setNewEvent({ ...newEvent, type: e.target.value as 'job-fair' | 'webinar' })
                  }
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                >
                  <option value="job-fair">Job Fair</option>
                  <option value="webinar">Webinar</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Meeting Link
                </label>
                <input
                  type="text"
                  value={newEvent.meetingLink}
                  onChange={(e) =>
                    setNewEvent({ ...newEvent, meetingLink: e.target.value })
                  }
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Description
                </label>
                <textarea
                  value={newEvent.description}
                  onChange={(e) =>
                    setNewEvent({ ...newEvent, description: e.target.value })
                  }
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  rows={3}
                />
              </div>
              <div className="flex justify-end space-x-2">
                <button
                  onClick={() => setShowEventForm(false)}
                  className="bg-gray-200 text-gray-700 px-4 py-2 rounded hover:bg-gray-300"
                >
                  Cancel
                </button>
                <button
                  onClick={handleCreateEvent}
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                  Create
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CalendarEvents;