import { MemberCategory } from "../Models/Enums/MemberCategory";
import type { IProfile } from "../Models/Types/IProfile";
import type { IProfileCustomization } from "../Models/Types/IProfileCustomization";
import type { IProfileHealth } from "../Models/Types/IProfileHealth";
import type { IProfileInfo } from "../Models/Types/IProfileInfo";
import type { IProfileInventory } from "../Models/Types/IProfileInventory";
import type { IProfileSkills } from "../Models/Types/IProfileSkills";
import type { IProfileStats } from "../Models/Types/IProfileStats";
import type { ISerializedItem } from "../Models/Types/ISerializedItem";
import Tables from "../Services/Tables";
import Item from "./Item";

export default class Profile {
	public static readonly TemplateData: Partial<IProfile> = {
		Stats: {
			SessionCounters: {
				Items: [
					{
						Key: ["Exp", "ExpLooting", "ExpTrigger"],
						Value: 100,
					},
					{
						Key: ["BodyPartDamage", "LeftLeg"],
						Value: 0,
					},
					{
						Key: ["BodyPartDamage", "RightLeg"],
						Value: 0,
					},
					{
						Key: ["AmmoUsed"],
						Value: 1337,
					},
					{
						Key: ["CauseBodyDamage"],
						Value: 1337,
					},
					{
						Key: ["CauseArmorDamage"],
						Value: 1337,
					},
					{
						Key: ["HitCount"],
						Value: 1337,
					},
					{
						Key: ["AmmoReached"],
						Value: 1,
					},
					{
						Key: ["HeadShots"],
						Value: 1,
					},
					{
						Key: ["Kills", "Pmc"],
						Value: 1,
					},
					{
						Key: ["Kills"],
						Value: 1,
					},
					{
						Key: ["KilledSavage"],
						Value: 1,
					},
					{
						Key: ["Exp", "ExpKill", "ExpKillBase"],
						Value: 100,
					},
					{
						Key: ["Exp", "ExpKill", "ExpKillBodyPartBonus"],
						Value: 120,
					},
					{
						Key: ["KilledWithAssaultRifle"],
						Value: 1,
					},
					{
						Key: ["LongestKillShot"],
						Value: 1337,
					},
					{
						Key: ["BodiesLooted"],
						Value: 1,
					},
					{
						Key: ["LootItem", "55d7217a4bdc2d86028b456d"],
						Value: 1,
					},
					{
						Key: ["Exp", "ExpLooting", "ExpItemLooting"],
						Value: 179,
					},
					{
						Key: ["LootItem", "557ffd194bdc2d28148b457f"],
						Value: 1,
					},
					{
						Key: ["LootItem", "56e33634d2720bd8058b456b"],
						Value: 1,
					},
					{
						Key: ["LootItem", "5857a8bc2459772bad15db29"],
						Value: 1,
					},
					{
						Key: ["MobContainers"],
						Value: 1,
					},
					{
						Key: ["LootItem", "560d5e524bdc2d25448b4571"],
						Value: 15,
					},
					{
						Key: ["LootItem", "572b7adb24597762ae139821"],
						Value: 2,
					},
					{
						Key: ["LootItem", "57616a9e2459773c7a400234"],
						Value: 4,
					},
					{
						Key: ["LootItem", "5a7c4850e899ef00150be885"],
						Value: 2,
					},
					{
						Key: ["Equipments"],
						Value: 2,
					},
					{
						Key: ["LootItem", "572b7f1624597762ae139822"],
						Value: 2,
					},
					{
						Key: ["LootItem", "57e26fc7245977162a14b800"],
						Value: 1,
					},
					{
						Key: ["LootItem", "576165642459773c7a400233"],
						Value: 2,
					},
					{
						Key: ["LootItem", "57616ca52459773c69055192"],
						Value: 2,
					},
					{
						Key: ["LootItem", "57a9b9ce2459770ee926038d"],
						Value: 2,
					},
					{
						Key: ["LootItem", "57616c112459773cce774d66"],
						Value: 2,
					},
					{
						Key: ["LootItem", "5649ade84bdc2d1b2b8b4587"],
						Value: 2,
					},
					{
						Key: ["LootItem", "58272b392459774b4c7b3ccd"],
						Value: 2,
					},
					{
						Key: ["LootItem", "57d17e212459775a1179a0f5"],
						Value: 2,
					},
					{
						Key: ["LootItem", "57d17c5e2459775a5c57d17d"],
						Value: 2,
					},
					{
						Key: ["Weapons"],
						Value: 1,
					},
					{
						Key: ["Mods"],
						Value: 9,
					},
					{
						Key: ["Exp", "ExpExamine"],
						Value: 8,
					},
					{
						Key: ["BodyPartDamage", "RightArm"],
						Value: 1337,
					},
					{
						Key: ["BodyPartDamage", "Head"],
						Value: 1337,
					},
					{
						Key: ["BodyPartsDestroyed"],
						Value: 1,
					},
					{
						Key: ["Deaths"],
						Value: 1,
					},
					{
						Key: ["Pedometer"],
						Value: 322,
					},
					{
						Key: ["LongestKillStreak"],
						Value: 1,
					},
					{
						Key: ["ExpKill"],
						Value: 220,
					},
					{
						Key: ["ExpLooting"],
						Value: 279,
					},
				],
			},
			OverallCounters: {
				Items: [
					{
						Key: ["TriggerVisited", "roof02"],
						Value: 1,
					},
					{
						Key: ["Triggers"],
						Value: 1,
					},
					{
						Key: ["CurrentWinStreak", "Pmc"],
						Value: 0,
					},
					{
						Key: ["Sessions", "Pmc"],
						Value: 1,
					},
					{
						Key: ["ExitStatus", "Killed", "Pmc"],
						Value: 1,
					},
					{
						Key: ["LifeTime", "Pmc"],
						Value: 290,
					},
					{
						Key: ["Exp", "ExpHeal"],
						Value: 0,
					},
					{
						Key: ["Exp", "ExpExitStatus"],
						Value: 0,
					},
					{
						Key: ["Kills"],
						Value: 1,
					},
					{
						Key: ["Deaths"],
						Value: 1,
					},
					{
						Key: ["KilledLevel0010"],
						Value: 0,
					},
					{
						Key: ["KilledLevel1030"],
						Value: 0,
					},
					{
						Key: ["KilledLevel3050"],
						Value: 0,
					},
					{
						Key: ["KilledLevel5070"],
						Value: 0,
					},
					{
						Key: ["KilledLevel7099"],
						Value: 0,
					},
					{
						Key: ["KilledLevel100"],
						Value: 0,
					},
					{
						Key: ["KilledBear"],
						Value: 0,
					},
					{
						Key: ["KilledUsec"],
						Value: 0,
					},
					{
						Key: ["KilledSavage"],
						Value: 1,
					},
					{
						Key: ["KilledPmc"],
						Value: 0,
					},
					{
						Key: ["KilledWithKnife"],
						Value: 0,
					},
					{
						Key: ["KilledWithPistol"],
						Value: 0,
					},
					{
						Key: ["KilledWithSmg"],
						Value: 0,
					},
					{
						Key: ["KilledWithShotgun"],
						Value: 0,
					},
					{
						Key: ["KilledWithAssaultRifle"],
						Value: 1,
					},
					{
						Key: ["KilledWithAssaultCarbine"],
						Value: 0,
					},
					{
						Key: ["KilledWithGrenadeLauncher"],
						Value: 0,
					},
					{
						Key: ["KilledWithMachineGun"],
						Value: 0,
					},
					{
						Key: ["KilledWithMarksmanRifle"],
						Value: 0,
					},
					{
						Key: ["KilledWithSniperRifle"],
						Value: 0,
					},
					{
						Key: ["KilledWithSpecialWeapon"],
						Value: 0,
					},
					{
						Key: ["KilledWithThrowWeapon"],
						Value: 0,
					},
					{
						Key: ["HeadShots"],
						Value: 1,
					},
					{
						Key: ["BloodLoss"],
						Value: 0,
					},
					{
						Key: ["BodyPartsDestroyed"],
						Value: 1,
					},
					{
						Key: ["Heal"],
						Value: 0,
					},
					{
						Key: ["Fractures"],
						Value: 0,
					},
					{
						Key: ["Contusions"],
						Value: 0,
					},
					{
						Key: ["Dehydrations"],
						Value: 0,
					},
					{
						Key: ["Exhaustions"],
						Value: 0,
					},
					{
						Key: ["Medicines"],
						Value: 0,
					},
					{
						Key: ["UsedFoods"],
						Value: 0,
					},
					{
						Key: ["UsedDrinks"],
						Value: 0,
					},
					{
						Key: ["Pedometer"],
						Value: 322,
					},
					{
						Key: ["BodiesLooted"],
						Value: 1,
					},
					{
						Key: ["SafeLooted"],
						Value: 0,
					},
					{
						Key: ["LockableContainers"],
						Value: 0,
					},
					{
						Key: ["Weapons"],
						Value: 1,
					},
					{
						Key: ["Ammunitions"],
						Value: 0,
					},
					{
						Key: ["Mods"],
						Value: 9,
					},
					{
						Key: ["ThrowWeapons"],
						Value: 0,
					},
					{
						Key: ["SpecialItems"],
						Value: 0,
					},
					{
						Key: ["FoodDrinks"],
						Value: 0,
					},
					{
						Key: ["Keys"],
						Value: 0,
					},
					{
						Key: ["BartItems"],
						Value: 0,
					},
					{
						Key: ["MobContainers"],
						Value: 1,
					},
					{
						Key: ["Equipments"],
						Value: 2,
					},
					{
						Key: ["CauseBodyDamage"],
						Value: 3581,
					},
					{
						Key: ["CauseArmorDamage"],
						Value: 5351,
					},
					{
						Key: ["HitCount"],
						Value: 3,
					},
					{
						Key: ["LongShots"],
						Value: 0,
					},
					{
						Key: ["LongestKillShot"],
						Value: 931,
					},
					{
						Key: ["LongestKillStreak"],
						Value: 1,
					},
					{
						Key: ["ExpKill"],
						Value: 220,
					},
					{
						Key: ["ExpLooting"],
						Value: 279,
					},
					{
						Key: ["Money", "RUB"],
						Value: 0,
					},
					{
						Key: ["Money", "EUR"],
						Value: 0,
					},
					{
						Key: ["Money", "USD"],
						Value: 0,
					},
					{
						Key: ["AmmoUsed"],
						Value: 23,
					},
					{
						Key: ["AmmoReached"],
						Value: 1,
					},
					{
						Key: ["TriggerVisited"],
						Value: 0,
					},
				],
			},
			SessionExperienceMult: 1,
			TotalSessionExperience: 507,
			LastSessionDate: 1,
			DroppedItems: [],
			Victims: [],
			Aggressor: {},
			CarriedQuestItems: [],
			TotalInGameTime: 0,
		},
	};

	public ID: string;
	public AccountID: number;
	public SavageID: string | null = null;
	public Info: IProfileInfo = {
		Nickname: "Tarkov Player",
		LowerNickname: "tarkovplayer",
		Side: "Bear",
		Voice: "Bear_1",
		Level: 69,
		Experience: 10000000,
		RegistrationDate: 0,
		GameVersion: "standard",
		AccountType: 0,
		MemberCategory: MemberCategory.Developer,
		lockedMoveCommands: false,
		LastTimePlayedAsSavage: 0,
		Settings: {},
		NeedWipe: true,
		GlobalWipe: true,
		NicknameChangeDate: 0,
	};
	public Health: IProfileHealth = {
		Hydration: {
			Current: 100,
			Maximum: 100,
		},
		Energy: {
			Current: 100,
			Maximum: 100,
		},
		BodyParts: {
			Head: {
				Health: {
					Current: 35,
					Maximum: 35,
				},
			},
			Chest: {
				Health: {
					Current: 80,
					Maximum: 80,
				},
			},
			Stomach: {
				Health: {
					Current: 70,
					Maximum: 70,
				},
			},
			LeftArm: {
				Health: {
					Current: 60,
					Maximum: 60,
				},
			},
			RightArm: {
				Health: {
					Current: 60,
					Maximum: 60,
				},
			},
			LeftLeg: {
				Health: {
					Current: 65,
					Maximum: 65,
				},
			},
			RightLeg: {
				Health: {
					Current: 65,
					Maximum: 65,
				},
			},
		},
	};
	public Customization: IProfileCustomization = {
		Head: {
			path: "assets/content/characters/character/prefabs/bear_head.bundle",
			rcid: null,
		},
		Body: {
			path: "assets/content/characters/character/prefabs/bear_body.bundle",
			rcid: "",
		},
		Feet: {
			path: "assets/content/characters/character/prefabs/bear_feet.bundle",
			rcid: null,
		},
		Hands: {
			path: "assets/content/hands/wild/wild_body_3_firsthands.bundle",
			rcid: null,
		},
	};
	public Skills: IProfileSkills = {
		Common: [],
		Mastering: [],
		Points: 0,
	};
	public Inventory: IProfileInventory = {
		items: [],
		equipment: "",
		stash: "",
		questRaidItems: "",
		questStashItems: "",
		fastPanel: {},
	};
	public Encyclopedia = new Array<string>();
	public ConditionCounters: {
		Counters: Array<{ Key: string[]; Value: number }>;
	} = {
		Counters: [],
	};
	public BackendCounters: Record<string, unknown> = {};
	public InsuredItems = new Array<string>();
	public Notes = {
		Notes: new Array<string>(),
	};
	public Quests = [];
	public TraderStandings = {};
	public WishList = [];
	public Stats = Profile.TemplateData.Stats as IProfileStats;

	constructor(ID: string, AccountId: number) {
		this.ID = ID;
		this.AccountID = AccountId;

		this.CreateInitialItems();
	}

	public AddItem(ItemToAdd: Item) {
		this.Inventory.items.push(ItemToAdd.Serialize());
	}

	public CreateItem(TemplateID: string, ParentID?: string, SlotID?: string) {
		const NewItem = new Item(TemplateID, ParentID, SlotID);

		this.AddItem(NewItem);

		return NewItem;
	}

	public CreateInitialItems() {
		const Inventory = this.CreateItem("55d7217a4bdc2d86028b456d");
		const RegularStash = this.CreateItem("5811ce772459770e9e5f9532");
		const QuestRaidStash = this.CreateItem("5811ce772459770e9e5f9532");
		const QuestStash = this.CreateItem("5811ce772459770e9e5f9532");
		this.CreateItem("557ffd194bdc2d28148b457f", Inventory.ID, "Pockets");
		this.CreateItem("5857a8bc2459772bad15db29", Inventory.ID, "SecuredContainer");
		this.CreateItem("5648a69d4bdc2ded0b8b457b", Inventory.ID, "TacticalVest");
		this.CreateItem("5ab8ebf186f7742d8b372e80", Inventory.ID, "Backpack");
		this.CreateItem("5a7c4850e899ef00150be885", Inventory.ID, "Headwear");
		this.CreateItem("545cdb794bdc2d3a198b456a", Inventory.ID, "ArmorVest");
		// this.CreateItem("57ae0171245977343c27bfcf", RegularStash.ID, "hideout");

		this.Inventory.equipment = Inventory.ID;
		this.Inventory.stash = RegularStash.ID;
		this.Inventory.questRaidItems = QuestRaidStash.ID;
		this.Inventory.questStashItems = QuestStash.ID;

		this.PushTemplate(Tables.Globals.ItemPresets["5a32808386f774764a3226d9"], Inventory.ID, "FirstPrimaryWeapon");
		this.PushTemplate(Tables.Globals.ItemPresets["5a327f9086f77475187e50a9"], Inventory.ID, "SecondPrimaryWeapon");
	}

	public PushTemplate(
		Template: { _items: Array<ISerializedItem> },
		ForceParent?: string,
		ForceSlot: string = "hideout",
	) {
		const OriginalItemIdLookup = new Map<string, string>();

		Template._items.forEach((ItemData) => {
			const OriginalParentId = ItemData.parentId || ForceParent || this.Inventory.stash;
			const TrueParentId = OriginalItemIdLookup.get(OriginalParentId) || OriginalParentId;

			const NewItem = new Item(ItemData._tpl, TrueParentId, ItemData.slotId || ForceSlot, ItemData.upd);
			OriginalItemIdLookup.set(ItemData._id, NewItem.ID);

			this.AddItem(NewItem);
		});
	}

	public static FromData(data: IProfile): Profile {
		const NewProfile = new Profile(data._id, data.aid);
		NewProfile.SavageID = data.savage;
		NewProfile.Info = data.Info;
		NewProfile.Health = data.Health;
		NewProfile.Customization = data.Customization;
		NewProfile.Inventory = data.Inventory;
		NewProfile.Encyclopedia = data.Encyclopedia;
		NewProfile.ConditionCounters = data.ConditionCounters;
		NewProfile.BackendCounters = data.BackendCounters;
		NewProfile.InsuredItems = data.InsuredItems;
		NewProfile.Notes = data.Notes;
		NewProfile.Quests = data.Quests;
		NewProfile.TraderStandings = data.TraderStandings;
		NewProfile.WishList = data.WishList;
		NewProfile.Stats = data.Stats;

		return NewProfile;
	}

	public static CreateNewProfile(ID: string, AccountID: number): Profile {
		return new Profile(ID, AccountID);
	}

	public GetProfileData(): IProfile {
		return {
			_id: this.ID,
			aid: this.AccountID,
			savage: this.SavageID,
			Info: this.Info,
			Health: this.Health,
			Customization: this.Customization,
			Inventory: this.Inventory,
			Encyclopedia: this.Encyclopedia,
			ConditionCounters: this.ConditionCounters,
			BackendCounters: this.BackendCounters,
			InsuredItems: this.InsuredItems,
			Notes: this.Notes,
			Quests: this.Quests as [],
			TraderStandings: this.TraderStandings,
			WishList: this.WishList as [],
			Stats: this.Stats,
			Skills: this.Skills,
		};
	}
}
