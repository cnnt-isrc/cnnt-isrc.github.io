"use client";
import { useMemo } from "react";
import DetailCard from "../DetailCard";
import { FilteredEventsType, EventType } from "@/types";
import { groupEventsByStatus, getEventStatusOrder } from "@/lib/filterProjects";

type EventsListProps = {
  filteredEvents: FilteredEventsType;
};

const EventsList = ({ filteredEvents }: EventsListProps) => {
  const eventsByStatus = useMemo(() => {
    return groupEventsByStatus(filteredEvents);
  }, [filteredEvents]);

  const eventStatuses = useMemo(() => {
    return getEventStatusOrder().filter(
      (status) => eventsByStatus[status]?.length > 0
    );
  }, [eventsByStatus]);

  if (filteredEvents.length === 0) {
    return (
      <div className="text-center py-12 px-6">
        <p className="text-gray-400 text-lg">
          No events found matching your search.
        </p>
      </div>
    );
  }

  return (
    <div className="relative px-6">
      <div className="space-y-16">
        {eventStatuses.map((status) => (
          <div key={status} className="relative">
            {/* Status heading */}
            <div className="mb-8">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
                {status}
              </h2>
            </div>
            {/* Events list */}
            <div className="space-y-4">
              {eventsByStatus[status].map((event: EventType) => (
                <DetailCard
                  key={event.eventName}
                  eventName={event.eventName}
                  description={event.description}
                  link={event.link}
                  date={event.date}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventsList;
