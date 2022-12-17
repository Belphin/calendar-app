import { Button, Layout, Modal, Row } from "antd";
import React, { FC, useEffect, useState } from "react";
import EventCalendar from "../components/EventCalendar";
import EventForm from "../components/EventForm";
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { IEvent } from "../models/IEvent";

const Event: FC = () => {
	const [modalVisible, setModalVisible] = useState(false);
	const { fetchGuests, createEvent } = useActions();
	const { guests, events } = useTypedSelector((state) => state.event);

	useEffect(() => {
		fetchGuests();
	}, []);

	const addNewEvent = (event: IEvent) => {
		setModalVisible(false);
		createEvent(event);
	};

	return (
		<Layout>
			<EventCalendar events={[]} />
			<Row justify="center">
				<Button onClick={() => setModalVisible(true)}>Add event</Button>
			</Row>
			<Modal
				title="Add event"
				open={modalVisible}
				footer={null}
				onCancel={() => setModalVisible(false)}>
				<EventForm submit={addNewEvent} guests={guests} />
			</Modal>
		</Layout>
	);
};

export default Event;
