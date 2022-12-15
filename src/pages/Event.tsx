import { Button, Layout, Modal, Row } from "antd";
import React, { FC, useEffect, useState } from "react";
import EventCalendar from "../components/EventCalendar";
import EventForm from "../components/EventForm";
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";

const Event: FC = () => {
	const [modalVisible, setModalVisible] = useState(false);
	const { fetchGuests } = useActions();
	const { guests } = useTypedSelector((state) => state.event);

	useEffect(() => {
		fetchGuests();
	}, []);

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
				<EventForm guests={guests} />
			</Modal>
		</Layout>
	);
};

export default Event;
