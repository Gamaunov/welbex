'use client';

import Link from 'next/link';
import { Component } from 'react';
import cls from './ErrorBoundary.module.scss';

class ErrorBoundary extends Component<any, any> {
	state = {
		hasError: false,
	};

	static getDerivedStateFromError() {
		return { hasError: true };
	}

	render() {
		if (this.state.hasError) {
			return (
				<div className={cls.inner}>
					<h1>Попробуйте перезагрузить страницу,</h1>
					<Link className={cls.link} href="https://www.gamayunov.website/">
						или обратитесь к разработчикам
					</Link>
				</div>
			);
		}

		return this.props.children;
	}
}

export default ErrorBoundary;
