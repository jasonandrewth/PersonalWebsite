<script context="module" lang="ts">
	declare global {
		interface Window {
			ethereum?: any;
		}
	}
</script>

<script lang="ts">
	// import * as Web3 from 'web3';
	import {
		connected,
		web3,
		selectedAccount,
		chainId,
		chainData,
		defaultEvmStores
	} from 'svelte-web3';

	import { onMount } from 'svelte';

	// const web3 = new Web3(Web3.givenProvider || 'ws://localhost:8545');

	let amount: number;
	let active: boolean;

	const onSubmit = (e) => {
		// console.log(amount);

		if (window.ethereum) {
			console.log(amount);
			send(amount);
		} else {
			alert('Please install a wallet');
		}
	};

	const send = async (amount: number) => {
		const accounts = await window.ethereum.request({
			method: 'eth_requestAccounts'
		});

		const wei = $web3.utils.toWei(amount.toString(), 'ether');

		if (accounts.length > 0) {
			window.ethereum.request({
				method: 'eth_sendTransaction',
				params: [
					{
						from: accounts[0],
						to: '0x6458278Ff1A3DfEdB8B3aa005Fc7B320908B7CfF',
						value: $web3.utils.toHex(wei)
					}
				]
			});
		}
	};

	onMount(() => {
		defaultEvmStores.setProvider();
		if (window.ethereum) {
			active = true;
		}
	});
</script>

{#if $connected}
	<div
		class="overflow-hidden fixed bottom-6 right-6 bg-black text-white border-white shadow-md shadow-red-700 z-[99999999999]"
	>
		<form
			class="p-6 max-w-sm border border-solid grid gap-x-4 gap-y-2 grid-cols-1 items-center"
			on:submit|preventDefault={onSubmit}
		>
			<header>Toggle</header>
			<div>
				<label for="amount" class="block text-white"> Tip me I know you're rich </label>
				<input
					class="w-full appearance-none text-right p-2 bg-black text-whote border border-solid border-white"
					bind:value={amount}
					id="amount"
					name="amount"
					type="text"
					placeholder="ETH"
				/>
			</div>
			<button type="submit" class="appearance-none border-none bg-white text-black p-2">
				TIP
			</button>
		</form>
	</div>
{/if}
