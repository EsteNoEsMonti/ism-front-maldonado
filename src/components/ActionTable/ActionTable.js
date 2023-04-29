import React from 'react';
import { Table, Col, Spin, Tooltip } from 'antd';
import styles from './ActionTable.module.css';

const ActionTable = ({ columns, items, isLoading, filterOn, sortingOn, actions, pagination = { pageSize: 50 }, loading = false }) => {

	const actionColumn = actions.length ? {
		title: actions[0].title,
		dataIndex: 'actions',
		filters: null,
		onFilter: null,
		sorter: null,
		fixed: 'right',
		render: (_, record, __) => (
			<span style={{ display: 'flex' }}>
				{actions.map(action => {
					const checkRules = (record, action) => {
						return (action.displayRule.reduce((result, rule) => {
							return result && record[rule.field] === rule.value;
						}, true));
					};

					if (record && checkRules(record, action)) {
						return (
							<Tooltip placement="top" title={action.label} key={action.label} >
								<action.icon className={styles.Icon} onClick={() => action.action(record)} id="icono" style={{ color: action.color }} />
							</Tooltip>
						);
					} else {
						return null;
					}
				})}
			</span>
		)
	} : null;

	const itemsWithActions = actionColumn ? items.map(item => {
		item.actions = actionColumn;
		return item;
	}) : items;

	const filters = [];
	filterOn.forEach(filter => {
		const values = items.map(item => ({ text: item[filter], value: item[filter] }));
		filters[filter] = values;
	});

	const tableColumns = [];
	columns.forEach((column) => {

		const shouldSort = sortingOn.find(field => field === Object.keys(column));

		const filterFunction = (value, record) => {
			const { [Object.keys(column)]: valueToCompare } = record;
			return valueToCompare.toString().indexOf(value) === 0;
		};

		const sortFunction = (a, b) => {
			const { [Object.keys(column)]: valueToSortA } = a;
			const { [Object.keys(column)]: valueToSortB } = b;
			if (typeof valueToSortA === 'number') {
				return valueToSortA - valueToSortB;
			} else {
				return valueToSortA.localeCompare(valueToSortB);
			}
		};

		tableColumns.push({
			key: Object.keys(column),
			title: <b>{Object.values(column)}</b>,
			dataIndex: Object.keys(column),
			filters: filters[Object.keys(column)] ? filters[Object.keys(column)] : null,
			onFilter: filters[Object.keys(column)] ? filterFunction : null,
			sorter: shouldSort ? sortFunction : null,
		});
	});

	actionColumn && tableColumns.push(actionColumn);

	return (
		<div className={styles.Container}>
			<Col className={styles.Box}>
				<Spin spinning={isLoading} tip="Cargando..." size="large">
					<Table
						pagination={pagination}
						size="small"
						columns={tableColumns}
						dataSource={itemsWithActions}
						bordered={false}
						rowKey="id"
						loading={loading}
					/>
				</Spin>
			</Col>
		</div>
	);
};

ActionTable.defaultProps = {
	columns: [],
	items: [],
	isLoading: false,
	filterOn: [],
	sortingOn: [],
	actions: [],
};

export default ActionTable;